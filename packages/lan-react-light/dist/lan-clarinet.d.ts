import React from 'react';

export interface LanClarinetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClarinet(props: LanClarinetProps): React.ReactElement;
export default LanClarinet;
