import React from 'react';

export interface BruAtlassianProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAtlassian: React.FC<BruAtlassianProps>;
export default BruAtlassian;
