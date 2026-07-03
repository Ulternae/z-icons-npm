import React from 'react';

export interface BruOrcidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruOrcid(props: BruOrcidProps): React.ReactElement;
export default BruOrcid;
