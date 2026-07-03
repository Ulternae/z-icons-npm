import React from 'react';

export interface BruOpensuseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOpensuse(props: BruOpensuseProps): React.ReactElement;
export default BruOpensuse;
