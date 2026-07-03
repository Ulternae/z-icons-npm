import React from 'react';

export interface BruAlgoliaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAlgolia(props: BruAlgoliaProps): React.ReactElement;
export default BruAlgolia;
