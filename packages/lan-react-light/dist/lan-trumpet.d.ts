import React from 'react';

export interface LanTrumpetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrumpet(props: LanTrumpetProps): React.ReactElement;
export default LanTrumpet;
