import React from 'react';

export interface BruUikitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruUikit(props: BruUikitProps): React.ReactElement;
export default BruUikit;
