import React from 'react';

export interface BruTypescriptProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTypescript(props: BruTypescriptProps): React.ReactElement;
export default BruTypescript;
