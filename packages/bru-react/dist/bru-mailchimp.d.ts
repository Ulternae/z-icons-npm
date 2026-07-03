import React from 'react';

export interface BruMailchimpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruMailchimp(props: BruMailchimpProps): React.ReactElement;
export default BruMailchimp;
