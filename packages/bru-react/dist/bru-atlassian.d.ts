import React from 'react';

export interface BruAtlassianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruAtlassian(props: BruAtlassianProps): React.ReactElement;
export default BruAtlassian;
