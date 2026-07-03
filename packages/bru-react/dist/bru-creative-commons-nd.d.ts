import React from 'react';

export interface BruCreativeCommonsNdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCreativeCommonsNd(props: BruCreativeCommonsNdProps): React.ReactElement;
export default BruCreativeCommonsNd;
