import React from 'react';

export interface BruLeanpubProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruLeanpub(props: BruLeanpubProps): React.ReactElement;
export default BruLeanpub;
