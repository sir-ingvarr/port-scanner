## Simple port scanner

scans ports 0 - 65535

### Example usage and output:

**Command**
```
./index.js -h google.com  -t 20   
```
**Output:**
```
Start scanning: google.com
Scanning completed in 30404 ms.
80, 443
```

### Parameters:

- **-h** or **--host** - host or ip to scan *(default: http://localhost)*
- **-t** or **--timeout** - port connection timeout in seconds *(default: 5)*
- **--help** - Show help 
