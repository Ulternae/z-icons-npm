import React from 'react';

export interface LanShowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShower(props: LanShowerProps): React.ReactElement;
export default LanShower;
