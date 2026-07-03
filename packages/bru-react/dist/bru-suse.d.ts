import React from 'react';

export interface BruSuseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSuse(props: BruSuseProps): React.ReactElement;
export default BruSuse;
