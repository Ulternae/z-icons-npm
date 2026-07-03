import React from 'react';

export interface BruWpformsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWpforms(props: BruWpformsProps): React.ReactElement;
export default BruWpforms;
