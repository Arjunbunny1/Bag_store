#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std; // Using namespace std

class DSU {
private:
    vector<int> parent;
    vector<int> sz;

public:
    DSU(int n) {
        parent.resize(n + 1);
        iota(parent.begin(), parent.end(), 0);
        sz.assign(n + 1, 1);
    }

    int find(int i) {
        if (parent[i] == i) {
            return i;
        }
        return parent[i] = find(parent[i]);
    }

    void unite(int i, int j) {
        int root_i = find(i);
        int root_j = find(j);
        if (root_i != root_j) {
            if (sz[root_i] < sz[root_j]) {
                swap(root_i, root_j);
            }
            parent[root_j] = root_i;
            sz[root_i] += sz[root_j];
        }
    }

    int getMaxComponentSize() {
        int maxSize = 0;
        for (int i = 1; i < parent.size(); ++i) {
            if (parent[i] == i) {
                if (sz[i] > maxSize) {
                    maxSize = sz[i];
                }
            }
        }
        return maxSize;
    }
};

int minimumClasses(int n, int m, vector<int>& a, vector<int>& b) {
    if (n == 0) {
        return 0;
    }

    DSU dsu(n);

    for (int i = 0; i < m; ++i) {
        dsu.unite(a[i], b[i]);
    }

    return dsu.getMaxComponentSize();
}

int main() {
    int n = 5;
    int m = 3;

    vector<int> a = {1, 2, 4};
    vector<int> b = {2, 3, 5};

    int result = minimumClasses(n, m, a, b);

    cout << result << endl;

    return 0;
}