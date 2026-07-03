import React from 'react';

export interface BruJenkinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJenkins(props: BruJenkinsProps): React.ReactElement;
export default BruJenkins;
