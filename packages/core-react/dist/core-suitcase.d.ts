import React from 'react';

export interface CoreSuitcaseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSuitcase(props: CoreSuitcaseProps): React.ReactElement;
export default CoreSuitcase;
