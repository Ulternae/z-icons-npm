import React from 'react';

export interface LanRectangleSdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRectangleSd(props: LanRectangleSdProps): React.ReactElement;
export default LanRectangleSd;
