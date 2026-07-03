import React from 'react';

export interface BruReadmeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruReadme(props: BruReadmeProps): React.ReactElement;
export default BruReadme;
