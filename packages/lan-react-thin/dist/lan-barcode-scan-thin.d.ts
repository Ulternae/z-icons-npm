import React from 'react';

export interface LanBarcodeScanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarcodeScanThin(props: LanBarcodeScanThinProps): React.ReactElement;
export default LanBarcodeScanThin;
