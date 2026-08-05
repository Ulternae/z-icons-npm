import React from 'react';

export interface LanCircleFrancProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleFranc(props: LanCircleFrancProps): React.ReactElement;
export default LanCircleFranc;
