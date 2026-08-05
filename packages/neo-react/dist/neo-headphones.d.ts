import React from 'react';

export interface NeoHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHeadphones(props: NeoHeadphonesProps): React.ReactElement;
export default NeoHeadphones;
