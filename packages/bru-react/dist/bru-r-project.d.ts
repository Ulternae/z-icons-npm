import React from 'react';

export interface BruRProjectProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruRProject(props: BruRProjectProps): React.ReactElement;
export default BruRProject;
