import React from 'react';

export interface LanCirclePesetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePeseta(props: LanCirclePesetaProps): React.ReactElement;
export default LanCirclePeseta;
