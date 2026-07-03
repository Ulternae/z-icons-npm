import React from 'react';

export interface BruDraft2digitalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDraft2digital(props: BruDraft2digitalProps): React.ReactElement;
export default BruDraft2digital;
