import React from 'react';

export interface LanQrcodeReadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQrcodeReadThin(props: LanQrcodeReadThinProps): React.ReactElement;
export default LanQrcodeReadThin;
