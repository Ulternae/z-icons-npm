import React from 'react';

export interface BruStudiovinariProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruStudiovinari(props: BruStudiovinariProps): React.ReactElement;
export default BruStudiovinari;
