import React from 'react';

export interface BruMicrosoftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMicrosoft(props: BruMicrosoftProps): React.ReactElement;
export default BruMicrosoft;
