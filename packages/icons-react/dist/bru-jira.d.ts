import React from 'react';

export interface BruJiraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruJira: React.FC<BruJiraProps>;
export default BruJira;
