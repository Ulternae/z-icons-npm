import React from 'react';

export interface LanSquarePesetaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePeseta(props: LanSquarePesetaProps): React.ReactElement;
export default LanSquarePeseta;
