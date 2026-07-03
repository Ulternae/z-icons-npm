import React from 'react';

export interface BruMintbitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMintbit(props: BruMintbitProps): React.ReactElement;
export default BruMintbit;
