import React from 'react';

export interface MinaHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeadphones(props: MinaHeadphonesProps): React.ReactElement;
export default MinaHeadphones;
