import React from 'react';

export interface LanTacoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaco(props: LanTacoProps): React.ReactElement;
export default LanTaco;
