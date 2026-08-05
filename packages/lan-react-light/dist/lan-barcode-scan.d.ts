import React from 'react';

export interface LanBarcodeScanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeScan(props: LanBarcodeScanProps): React.ReactElement;
export default LanBarcodeScan;
