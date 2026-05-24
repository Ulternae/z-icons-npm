import React from 'react';

export interface BruPhabricatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruPhabricator: React.FC<BruPhabricatorProps>;
export default BruPhabricator;
