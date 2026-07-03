import React from 'react';

export interface BruHtml5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHtml5(props: BruHtml5Props): React.ReactElement;
export default BruHtml5;
