import React from 'react';

export interface LanLungsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLungs(props: LanLungsProps): React.ReactElement;
export default LanLungs;
