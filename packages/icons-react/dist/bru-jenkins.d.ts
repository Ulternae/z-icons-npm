import React from 'react';

export interface BruJenkinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJenkins: React.FC<BruJenkinsProps>;
export default BruJenkins;
