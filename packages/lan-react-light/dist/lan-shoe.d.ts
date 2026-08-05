import React from 'react';

export interface LanShoeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShoe(props: LanShoeProps): React.ReactElement;
export default LanShoe;
