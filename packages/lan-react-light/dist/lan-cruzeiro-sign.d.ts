import React from 'react';

export interface LanCruzeiroSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCruzeiroSign(props: LanCruzeiroSignProps): React.ReactElement;
export default LanCruzeiroSign;
