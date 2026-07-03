import React from 'react';

export interface BruJoomlaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJoomla(props: BruJoomlaProps): React.ReactElement;
export default BruJoomla;
