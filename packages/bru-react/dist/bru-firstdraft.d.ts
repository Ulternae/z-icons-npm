import React from 'react';

export interface BruFirstdraftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruFirstdraft(props: BruFirstdraftProps): React.ReactElement;
export default BruFirstdraft;
