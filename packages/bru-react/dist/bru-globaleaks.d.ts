import React from 'react';

export interface BruGlobaleaksProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGlobaleaks(props: BruGlobaleaksProps): React.ReactElement;
export default BruGlobaleaks;
