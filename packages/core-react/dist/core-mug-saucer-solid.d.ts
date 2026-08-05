import React from 'react';

export interface CoreMugSaucerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMugSaucerSolid(props: CoreMugSaucerSolidProps): React.ReactElement;
export default CoreMugSaucerSolid;
