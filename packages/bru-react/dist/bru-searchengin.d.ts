import React from 'react';

export interface BruSearchenginProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSearchengin(props: BruSearchenginProps): React.ReactElement;
export default BruSearchengin;
