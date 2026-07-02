import React from 'react';

export interface CoreHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreHeadphones(props: CoreHeadphonesProps): React.ReactElement;
export default CoreHeadphones;
