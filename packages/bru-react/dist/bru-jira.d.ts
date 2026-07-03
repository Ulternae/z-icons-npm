import React from 'react';

export interface BruJiraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruJira(props: BruJiraProps): React.ReactElement;
export default BruJira;
