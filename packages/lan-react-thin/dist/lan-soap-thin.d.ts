import React from 'react';

export interface LanSoapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoapThin(props: LanSoapThinProps): React.ReactElement;
export default LanSoapThin;
