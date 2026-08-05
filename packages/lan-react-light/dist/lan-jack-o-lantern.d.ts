import React from 'react';

export interface LanJackOLanternProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJackOLantern(props: LanJackOLanternProps): React.ReactElement;
export default LanJackOLantern;
