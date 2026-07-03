import React from 'react';

export interface BruPhabricatorProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruPhabricator(props: BruPhabricatorProps): React.ReactElement;
export default BruPhabricator;
