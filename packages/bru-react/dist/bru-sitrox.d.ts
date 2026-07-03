import React from 'react';

export interface BruSitroxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruSitrox(props: BruSitroxProps): React.ReactElement;
export default BruSitrox;
