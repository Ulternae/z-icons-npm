import React from 'react';

export interface BruOpenstreetmapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOpenstreetmap(props: BruOpenstreetmapProps): React.ReactElement;
export default BruOpenstreetmap;
