import React from 'react';

export interface BruCss3AltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCss3Alt(props: BruCss3AltProps): React.ReactElement;
export default BruCss3Alt;
